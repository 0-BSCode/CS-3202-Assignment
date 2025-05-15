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
import { Validate, Reverse } from "../../wailsjs/go/main/App"
import ReversalTab from "@/features/reversal/ReversalTab"
import ValidationTab from "@/features/validation/ValidationTab"

export enum TabsEnum {
    REVERSE = "REVERSE",
    VALIDATE = "VALIDATE",
    REPETITION = "REPETITION",
    CONVERSION = "CONVERSION"
}

function formatTab(tabName: string): string {
  return tabName[0].toUpperCase() + tabName.slice(1).toLowerCase()
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
            Validate(validateInput).then(setResultText)
        }

  return (
    <Tabs value={currentTab} className="w-[620px] py-4">
      <TabsList className="grid w-full grid-cols-4">
        {
          Object.keys(TabsEnum).map((tab) => (
            <TabsTrigger key={tab} value={TabsEnum[tab as keyof typeof TabsEnum]} onClick={() => switchTab(TabsEnum[tab as keyof typeof TabsEnum])}>
              {formatTab(tab)}
            </TabsTrigger>
          ))
        }
      </TabsList>
      <TabsContent value={TabsEnum.REVERSE}>
        <ReversalTab />
      </TabsContent>
      <TabsContent value={TabsEnum.VALIDATE}>
        <ValidationTab />
      </TabsContent>
    </Tabs>
  )
}
