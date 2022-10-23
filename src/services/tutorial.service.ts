import { collection } from "firebase/firestore/lite";
import db from "../firebase";
import ITutorialData from "../types/tutorial.type";

const dbx = collection(db, "tutorials");

async function TutorialDataService() {
  //   getAll() {
  //     return await
  //   }
  //   create(tutorial: ITutorialData) {
  //     return db.add(tutorial);
  //   }
  //   update(id: string, value: any) {
  //     return db.doc(id).update(value);
  //   }
  //   delete(id: string) {
  //     return db.doc(id).delete();
  //   }
}

export default TutorialDataService();
