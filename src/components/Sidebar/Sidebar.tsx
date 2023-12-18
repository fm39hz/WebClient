import { Card, List, ListItem } from "@material-tailwind/react";

const navListMenuItems = [
    {
        title: "Item1",
    },
    {
        title: "Item2",
    },
    {
        title: "Item3",
    },


];
const Sidebar = () => {
    return (
        <Card className="w-64">
            <List>
                <ListItem>Inbox</ListItem>
                <ListItem>Trash</ListItem>
                <ListItem>Settings</ListItem>
            </List>
        </Card>
    )
}
export default Sidebar