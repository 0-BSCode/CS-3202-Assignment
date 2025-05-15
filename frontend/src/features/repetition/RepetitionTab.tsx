import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Repetition, Reverse } from "~/go/main/App";

export function RepetitionTab() {
    const [input, setInput] = useState("aabbcc")
    const [result, setResult] = useState("")

    function repetition() {
        Repetition(input).then((res) => setResult(res));
    }

    return (
        <Card>
          <CardHeader>
            <CardTitle>Repetitive String</CardTitle>
            <CardDescription>
              Accepts strings that contain <i>x</i> amount of 'a', followed by an <i>x</i> amount of 'b', followed by an <i>x</i> amount of 'c'
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="reverse-input">Input</Label>
              <Input id="reverse-input" value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <Button className="w-full" onClick={repetition} disabled={!input.length}>Submit</Button>
            <div className="space-y-1">
              <Label htmlFor="output">Output</Label>
              <Input id="output" value={result} readOnly={true} />
            </div>
          </CardContent>
        </Card>
    )
}

export default RepetitionTab