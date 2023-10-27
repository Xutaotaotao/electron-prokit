
export type InitDbFunc = (file?: string) => Promise<boolean> | undefined
export type WriteDbFunc = (key: string, data: any) => Promise<void> | undefined
export type ReadDbFunc = (key: string) => Promise<any> | undefined
export type ClearDbFunc = () => Promise<void> | undefined | void
