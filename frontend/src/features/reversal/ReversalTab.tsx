import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Reverse } from "~/go/main/App";

export function ReversalTab() {
    const [input, setInput] = useState("I LOVE AUTOMATA")
    const [result, setResult] = useState("")

    function reverse() {
        Reverse(input).then((res) => setResult(res));
    }

    return (
        <Card>
          <CardHeader>
            <CardTitle>Reverse String</CardTitle>
            <CardDescription>
              Enter a string and click "Submit" to output each word in reverse.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="reverse-input">Input</Label>
              <Input id="reverse-input" value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <Button className="w-full" onClick={reverse} disabled={!input.length}>Submit</Button>
            <div className="space-y-1">
              <Label htmlFor="output">Output</Label>
              <Input id="output" value={result} readOnly={true} />
            </div>
          </CardContent>
        </Card>
    )
}

export default ReversalTab