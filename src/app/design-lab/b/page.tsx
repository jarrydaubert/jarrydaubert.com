import { labMetadata, projects } from "../data";
import { Viewer } from "./viewer";

export const metadata = labMetadata("The project room", "/design-lab/b");
export default function RoomHome() {
  return <Viewer project={projects[0]} />;
}
