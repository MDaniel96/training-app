import {createAnimation} from '@ionic/core';

// Source:  https://www.damirscorner.com/blog/posts/20200501-CustomizingPageTransitionsInIonic5.html

interface TransitionOptions {
    progressCallback?: ((ani: Animation | undefined) => void);
    baseEl: any;
    enteringEl: HTMLElement;
    leavingEl: HTMLElement | undefined;
}

const getIonPageElement = (element: HTMLElement) => {
    if (element.classList.contains('ion-page')) {
        return element;
    }

    const ionPage = element.querySelector(
        ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
    );
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates
    // and we don't have a null pointer
    return element;
};

export function pageSlideAnimation(_: HTMLElement, opts: TransitionOptions) {
    const DURATION = 200;

    const rootTransition = createAnimation()
        // root animation with common setup for the whole transition
        // @ts-ignore
        .duration(opts.duration || DURATION)
        .easing('cubic-bezier(0.3,0,0.66,1)');

    // ensure that the entering page is visible from the start of the transition
    const enteringPage = createAnimation()
        .addElement(getIonPageElement(opts.enteringEl))
        .beforeRemoveClass('ion-page-invisible');

    // create animation for the leaving page
    const leavingPage = createAnimation().addElement(
        getIonPageElement(opts.leavingEl)
    );

    // actual customized animation
    // @ts-ignore
    if (opts.direction === 'forward') {
        enteringPage.fromTo('transform', 'translateX(100%)', 'translateX(0)');
        leavingPage.fromTo('opacity', '1', '0.5');
    } else {
        leavingPage.fromTo('transform', 'translateX(0)', 'translateX(100%)');
        enteringPage.fromTo('opacity', '0.5', '1');
    }

    // include animations for both pages into the root animation
    rootTransition.addAnimation(enteringPage);
    rootTransition.addAnimation(leavingPage);
    return rootTransition;
}
