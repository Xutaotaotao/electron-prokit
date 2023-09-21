export const isMain:boolean = import.meta.env.VITE_CURRENT_RUN_MODE === "main";
export const isRender:boolean = import.meta.env.VITE_CURRENT_RUN_MODE === "render";
export const isPreload:boolean  = import.meta.env.VITE_CURRENT_RUN_MODE === "preload";
export const isWork: boolean = import.meta.env.VITE_CURRENT_RUN_MODE === "work";