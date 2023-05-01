import * as FS from 'expo-file-system';

export class FileHandler {

     fileUri = FS.documentDirectory + 'contatti.txt';

     constructor() {
        this.verifyFile().then(exists => {
            if (!exists) {
                console.log("creazione file");
               this.save([]); 
            }
         });
      }

     async save(addresses) {
        const content = JSON.stringify(addresses);
        await FS.writeAsStringAsync(this.fileUri, content);
     }

      async verifyFile() {
        const file = await FS.getInfoAsync(this.fileUri);
        if(file.exists)
            return true;
        else
            return false;
      }

     async upload() {
        const content = await FS.readAsStringAsync(this.fileUri);
        let addresses = JSON.parse(content);
        return addresses;
     }

     async delete() {
         /* const empty = [];
         const content = JSON.stringify(empty);
         await FS.writeAsStringAsync(this.fileUri, content); */
         await FS.deleteAsync(this.fileUri);
     }
}