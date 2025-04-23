import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"
import { CheckString, Reverse } from "../../wailsjs/go/main/App"

export enum TabsEnum {
    REVERSE = "REVERSE",
    VALIDATE = "VALIDATE",
}


export function MainTab() {
    const [reverseInput, setReverseInput] = useState("I LOVE AUTOMATA")
    const [validateInput, setValidateInput] = useState("aabbb")
    const [resultText, setResultText] = useState("");
    const [currentTab, setCurrentTab] = useState(TabsEnum.REVERSE);

    function switchTab(tab: TabsEnum) {
        setResultText("");
        setCurrentTab(tab);
    }

    function reverse() {
            Reverse(reverseInput).then((result) => setResultText(result));
    }

    function checkString() {
            CheckString(validateInput).then(setResultText)
        }

  return (
    <Tabs value={currentTab} className="w-[400px] py-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value={TabsEnum.REVERSE} onClick={() => switchTab(TabsEnum.REVERSE)}>Reverse</TabsTrigger>
        <TabsTrigger value={TabsEnum.VALIDATE} onClick={() => switchTab(TabsEnum.VALIDATE)}>Validate</TabsTrigger>
      </TabsList>
      <TabsContent value={TabsEnum.REVERSE}>
        <Card>
          <CardHeader>
            <CardTitle>Reverse String</CardTitle>
            <CardDescription>
              Enter a string and click "Submit" to output it in reverse.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="reverse-input">Input</Label>
              <Input id="reverse-input" value={reverseInput} onChange={(e) => setReverseInput(e.target.value)} />
            </div>
            <Button className="w-full" onClick={reverse} disabled={!reverseInput.length}>Submit</Button>
            <div className="space-y-1">
              <Label htmlFor="output">Output</Label>
              <Input id="output" value={resultText} readOnly={true} />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value={TabsEnum.VALIDATE}>
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
              <Input id="validate-input" value={validateInput} onChange={(e) => setValidateInput(e.target.value)}/>
            </div>
            <Button className="w-full" onClick={checkString} disabled={!validateInput.length}>Submit</Button>
            <div className="space-y-1">
              <Label htmlFor="new">Output</Label>
              <Input id="new" value={resultText} readOnly />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
