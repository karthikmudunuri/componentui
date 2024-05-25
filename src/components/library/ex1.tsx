import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "../ui/Button";
  import { Label } from "../ui/label";
  import { Input } from "../ui/input";
  
  export function Cardex() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Karthikeya Varma" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@karthikeyavarma" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    );
  }
  