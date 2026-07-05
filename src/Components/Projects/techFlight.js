let overlayEl = null;

const getOverlay = () => {
    if (!overlayEl || !overlayEl.isConnected) {
        overlayEl = document.createElement("div");
        overlayEl.className = "techFlightOverlay";
        overlayEl.setAttribute("aria-hidden", "true");
        const root = document.getElementById("top") || document.body;
        root.appendChild(overlayEl);
    }
    return overlayEl;
};

const ALIAS = { html: "js", css: "js", hammer: "js" };

const prefersReduced = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const findIcon = (techId) => {
    const direct = document.querySelector(`.skill3dItem[data-tech="${techId}"] .skill3dIcon`);
    if (direct) return direct;
    const alias = ALIAS[techId];
    if (alias) return document.querySelector(`.skill3dItem[data-tech="${alias}"] .skill3dIcon`);
    return null;
};

const easeInOut = (p) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2);
const bezier = (mt, t, a, c, b) => mt * mt * a + 2 * mt * t * c + t * t * b;
const centerOf = (rect) => [rect.left + rect.width / 2, rect.top + rect.height / 2];

const flyComet = ({ color, startX, startY, getEnd, iconEl, delay = 0, duration = 1100, onArrive }) => {
    let arrived = false;
    const arrive = () => {
        if (arrived) return;
        arrived = true;
        try {
            onArrive && onArrive();
        } catch (e) {
            /* noop */
        }
    };

    const flier = document.createElement("span");
    flier.className = "techFlier";
    flier.style.setProperty("--brand", color);

    let iconWrap = null;
    if (iconEl) {
        iconWrap = document.createElement("span");
        iconWrap.className = "techFlierIcon";
        const iconClone = iconEl.cloneNode(true);
        iconClone.removeAttribute("class");
        iconWrap.appendChild(iconClone);
        flier.appendChild(iconWrap);
    }

    const star = document.createElement("span");
    star.className = "techFlierStar";

    flier.appendChild(star);
    getOverlay().appendChild(flier);

    const cleanup = () => {
        arrive();
        flier.remove();
    };
    const safety = setTimeout(cleanup, delay + duration + 500);

    const side = Math.random() < 0.5 ? -1 : 1;
    const curve = (0.18 + Math.random() * 0.4) * side;
    const lift = 60 + Math.random() * 220;
    const startTime = performance.now() + delay;

    const step = (now) => {
        try {
            if (!flier.isConnected) return;
            if (now < startTime) {
                requestAnimationFrame(step);
                return;
            }
            let p = (now - startTime) / duration;
            if (p > 1) p = 1;
            const e = easeInOut(p);
            const mt = 1 - e;

            const [endX, endY] = getEnd();

            const dx = endX - startX;
            const dy = endY - startY;
            const ctrlX = startX + dx * 0.5 - dy * curve;
            const ctrlY = startY + dy * 0.5 + dx * curve - lift;

            const x = bezier(mt, e, startX, ctrlX, endX);
            const y = bezier(mt, e, startY, ctrlY, endY);

            const vx = 2 * mt * (ctrlX - startX) + 2 * e * (endX - ctrlX);
            const vy = 2 * mt * (ctrlY - startY) + 2 * e * (endY - ctrlY);
            const angle = Math.atan2(vy, vx) * (180 / Math.PI);

            const morph = iconWrap ? Math.min(1, p / 0.18) : 1;
            let starOpacity = Math.min(1, p / (iconWrap ? 0.14 : 0.1));
            if (p > 0.9) starOpacity = Math.max(0, (1 - p) / 0.1);
            const scale = 1 - 0.55 * morph;

            flier.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
            if (iconWrap) iconWrap.style.opacity = (1 - morph).toFixed(3);
            star.style.opacity = starOpacity.toFixed(3);
            star.style.setProperty("--tail-angle", `${angle - 90}deg`);

            if (p >= 0.86) arrive();

            if (p < 1) {
                requestAnimationFrame(step);
            } else {
                clearTimeout(safety);
                flier.remove();
            }
        } catch (err) {
            clearTimeout(safety);
            cleanup();
        }
    };
    requestAnimationFrame(step);
};

export const flyTech = ({ techId, color, targetEl, delay = 0, duration = 1100, onArrive }) => {
    if (!targetEl) return;
    const done = () => {
        try {
            onArrive && onArrive();
        } catch (e) {
            /* noop */
        }
    };

    const icon = findIcon(techId);
    const origin = icon || document.querySelector(".skills3dStage");
    if (prefersReduced() || !origin) {
        done();
        return;
    }

    const s = origin.getBoundingClientRect();
    if (s.width === 0 && s.height === 0) {
        done();
        return;
    }

    flyComet({
        color,
        startX: s.left + s.width / 2,
        startY: s.top + s.height / 2,
        getEnd: () => centerOf(targetEl.getBoundingClientRect()),
        iconEl: icon,
        delay,
        duration,
        onArrive,
    });
};

export const flyTechBack = ({ techId, color, fromEl }) => {
    if (!fromEl || fromEl.dataset.flying || prefersReduced()) return false;

    const icon = findIcon(techId);
    if (!icon) return false;
    const iconRect = icon.getBoundingClientRect();
    if (iconRect.width === 0 && iconRect.height === 0) return false;

    const from = fromEl.getBoundingClientRect();
    fromEl.dataset.flying = "1";

    flyComet({
        color,
        startX: from.left + from.width / 2,
        startY: from.top + from.height / 2,
        getEnd: () => centerOf(icon.getBoundingClientRect()),
        iconEl: null,
        duration: 900,
        onArrive: () => {
            delete fromEl.dataset.flying;
            icon.classList.remove("pinged");
            icon.getBoundingClientRect();
            icon.classList.add("pinged");
            setTimeout(() => icon.classList.remove("pinged"), 700);
        },
    });
    return true;
};
