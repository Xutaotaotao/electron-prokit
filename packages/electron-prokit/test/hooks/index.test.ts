import {
  expect
} from "@jest/globals";
import {
  useBrowserWindow,
  useContextBridge,
  useDbFile,
  useIpcMain,
  useIpcRenderer,
  useKoffi,
  useLowdb,
} from '../../src/hooks';


describe('hooks', () => {
  test('useBrowserWindow should return BrowserWindow in main process', () => {
    const browserWindow = useBrowserWindow({});
    expect(browserWindow).toBeDefined();
  });

  test('useIpcMain should return ipcMain in main process', () => {
    const ipcMain = useIpcMain();
    expect(ipcMain).toBeDefined();
  });

  test('useIpcRenderer should return ipcRenderer in preload or work processes', () => {
    const ipcRenderer = useIpcRenderer();
    expect(ipcRenderer).toBeDefined();
  });

  test('useContextBridge should return contextBridge in preload or work processes', () => {
    const contextBridge = useContextBridge();
    expect(contextBridge).toBeDefined();
  });

  test('useKoffi should return Koffi in main process', () => {
    const koffi = useKoffi();
    expect(koffi).toBeDefined();
  });

  test('useDbFile should return the default file path in main process', () => {
    const dbFile = useDbFile();
    expect(dbFile).toEqual('your-expected-file-path'); // Replace 'your-expected-file-path' with the expected value
  });

  test('useLowdb should return a LowSync instance in main process', async () => {
    const dbFile = 'your-file-path'; // Provide a valid file path for testing
    const lowdb = await useLowdb(dbFile);
    expect(lowdb).toBeDefined();
  });
});
