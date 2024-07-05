import { Filesystem as CapFileSystem, Directory } from '@capacitor/filesystem';

class FileSystem {
  async writeFile(fileName: string, data: string): Promise<string> {
    const writeResult = await CapFileSystem.writeFile({
      path: fileName,
      data: data,
      directory: Directory.Documents
    });
    return writeResult.uri;
  }
}

export default new FileSystem();