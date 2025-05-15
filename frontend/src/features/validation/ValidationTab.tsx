import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Validate } from "~/go/main/App";

export function ValidationTab() {
    const [input, setInput] = useState("aabbb")
    const [result, setResult] = useState("")

    function validate() {
        Validate(input).then((res) => setResult(res))
    }

    return (
        <Card>
          <CardHeader>
            <CardTitle>Validate String</CardTitle>
            <CardDescription>
              Enter a string and click "Submit" to check if it is valid. It's valid if the string has an even number of "a"'s and an odd number of "b"'s.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="validate-input">Input</Label>
              <Input id="validate-input" value={input} onChange={(e) => setInput(e.target.value)}/>
            </div>
            <Button className="w-full" onClick={validate} disabled={!input.length}>Submit</Button>
            <div className="space-y-1">
              <Label htmlFor="new">Output</Label>
              <Input id="new" value={result} readOnly />
            </div>
          </CardContent>
        </Card>
    )
}

export default ValidationTab