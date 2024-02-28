export type DateParserOptionsType = "short" | "long" | "detailed"

export function DateParser(date: Date | string, option?: DateParserOptionsType){
  return new Date(date).toLocaleDateString("en-US", {day: "2-digit", month: "long", year: "numeric"})
}