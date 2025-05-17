import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"
import ReversalTab from "@/features/reversal/ReversalTab"
import ValidationTab from "@/features/validation/ValidationTab"
import RepetitionTab from "@/features/repetition/RepetitionTab"
import ConversionTab from "@/features/conversion/ConversionTab"

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
    const [currentTab, setCurrentTab] = useState(TabsEnum.REVERSE);

    function switchTab(tab: TabsEnum) {
        setCurrentTab(tab);
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
      <TabsContent value={TabsEnum.REPETITION}>
        <RepetitionTab />
      </TabsContent>
      <TabsContent value={TabsEnum.CONVERSION}>
        <ConversionTab />
      </TabsContent>
    </Tabs>
  )
}
