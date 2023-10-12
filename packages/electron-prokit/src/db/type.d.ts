
export type InitDbFunc = (file?: string) => Promise<boolean>
export type WriteDbFunc = (key: string, data: any) => Promise<void>
export type ReadDbFunc = (key: string) => Promise<any>
export type ClearDbFunc = () => void
