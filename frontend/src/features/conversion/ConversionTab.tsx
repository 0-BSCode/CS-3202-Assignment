import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Convert } from "~/go/main/App";

export function ConversionTab() {
    const [input, setInput] = useState("1031")
    const [result, setResult] = useState("")

    function convert() {
        Convert(input).then((res) => setResult(res));
    }

    return (
        <Card>
          <CardHeader>
            <CardTitle>Convert String</CardTitle>
            <CardDescription>
              Converts an octal string into a binary string
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="reverse-input">Input</Label>
              <Input id="reverse-input" type="number" value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <Button className="w-full" onClick={convert} disabled={!input.length}>Submit</Button>
            <div className="space-y-1">
              <Label htmlFor="output">Output</Label>
              <Input id="output" value={result} readOnly={true} />
            </div>
          </CardContent>
        </Card>
    )
}

export default ConversionTab