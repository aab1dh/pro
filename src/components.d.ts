/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface ComponentGallery {
    }
    interface ErrorBoundry {
    }
    interface ProButton {
        "name": string;
        "styles": { [key: string]: string };
    }
    interface ProCard {
        "imgSrc": string;
    }
    interface ProCarousel {
    }
    interface ProImg {
        "height": number;
        "src": string;
        "width": number;
    }
    interface ProSkeleton {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLComponentGalleryElement extends Components.ComponentGallery, HTMLStencilElement {
    }
    var HTMLComponentGalleryElement: {
        prototype: HTMLComponentGalleryElement;
        new (): HTMLComponentGalleryElement;
    };
    interface HTMLErrorBoundryElement extends Components.ErrorBoundry, HTMLStencilElement {
    }
    var HTMLErrorBoundryElement: {
        prototype: HTMLErrorBoundryElement;
        new (): HTMLErrorBoundryElement;
    };
    interface HTMLProButtonElement extends Components.ProButton, HTMLStencilElement {
    }
    var HTMLProButtonElement: {
        prototype: HTMLProButtonElement;
        new (): HTMLProButtonElement;
    };
    interface HTMLProCardElement extends Components.ProCard, HTMLStencilElement {
    }
    var HTMLProCardElement: {
        prototype: HTMLProCardElement;
        new (): HTMLProCardElement;
    };
    interface HTMLProCarouselElement extends Components.ProCarousel, HTMLStencilElement {
    }
    var HTMLProCarouselElement: {
        prototype: HTMLProCarouselElement;
        new (): HTMLProCarouselElement;
    };
    interface HTMLProImgElement extends Components.ProImg, HTMLStencilElement {
    }
    var HTMLProImgElement: {
        prototype: HTMLProImgElement;
        new (): HTMLProImgElement;
    };
    interface HTMLProSkeletonElement extends Components.ProSkeleton, HTMLStencilElement {
    }
    var HTMLProSkeletonElement: {
        prototype: HTMLProSkeletonElement;
        new (): HTMLProSkeletonElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "component-gallery": HTMLComponentGalleryElement;
        "error-boundry": HTMLErrorBoundryElement;
        "pro-button": HTMLProButtonElement;
        "pro-card": HTMLProCardElement;
        "pro-carousel": HTMLProCarouselElement;
        "pro-img": HTMLProImgElement;
        "pro-skeleton": HTMLProSkeletonElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface ComponentGallery {
    }
    interface ErrorBoundry {
    }
    interface ProButton {
        "name"?: string;
        "styles"?: { [key: string]: string };
    }
    interface ProCard {
        "imgSrc"?: string;
    }
    interface ProCarousel {
    }
    interface ProImg {
        "height"?: number;
        "src"?: string;
        "width"?: number;
    }
    interface ProSkeleton {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "component-gallery": ComponentGallery;
        "error-boundry": ErrorBoundry;
        "pro-button": ProButton;
        "pro-card": ProCard;
        "pro-carousel": ProCarousel;
        "pro-img": ProImg;
        "pro-skeleton": ProSkeleton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "component-gallery": LocalJSX.ComponentGallery & JSXBase.HTMLAttributes<HTMLComponentGalleryElement>;
            "error-boundry": LocalJSX.ErrorBoundry & JSXBase.HTMLAttributes<HTMLErrorBoundryElement>;
            "pro-button": LocalJSX.ProButton & JSXBase.HTMLAttributes<HTMLProButtonElement>;
            "pro-card": LocalJSX.ProCard & JSXBase.HTMLAttributes<HTMLProCardElement>;
            "pro-carousel": LocalJSX.ProCarousel & JSXBase.HTMLAttributes<HTMLProCarouselElement>;
            "pro-img": LocalJSX.ProImg & JSXBase.HTMLAttributes<HTMLProImgElement>;
            "pro-skeleton": LocalJSX.ProSkeleton & JSXBase.HTMLAttributes<HTMLProSkeletonElement>;
        }
    }
}
