import { DESKTOP_WIDTH, LAPTOP_WIDTH } from './breakpoints'


export function calculateTotalStats(stats: StatsInfo[]) {
  return stats.reduce((acc, stat) => acc + stat.base_stat, 0)
}

export function calculateWeight(hectograms: number) {
  return convertToKilograms(hectograms) + '/' + convertToPounds(hectograms)
}

export function calculateHeight(decimeters: number) {
  return convertToMeters(decimeters) + '/' + convertToFeet(decimeters)
}

export function calculateProgressWidth(limit: number, width: number) {
  return (width / limit) * 100 + '%'
}

export function calculateContentPerPage(browserWidth: number) {
  return browserWidth < DESKTOP_WIDTH && browserWidth >= LAPTOP_WIDTH ? 18 : 20
}

function convertToKilograms(hectograms: number) {
  return hectograms / 10 + 'kg'
}

function convertToPounds(hectograms: number) {
  const pounds = hectograms * 0.220462
  return pounds.toFixed(1) + 'lb' 
}

function convertToMeters(decimeters: number) {
  return decimeters / 10 + 'm'
}

function convertToFeet(decimeters: number) {
  const inches = decimeters * 3.937 
  const feet = Math.floor(inches / 12) 
  const remainingInches = inches % 12 
  const formattedFeet = `${feet}.${Math.floor(remainingInches)}` 

  return `${formattedFeet} feet` 
}
