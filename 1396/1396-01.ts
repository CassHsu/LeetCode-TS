class CheckInEntry {
  startStation: string
  startTime: number
  constructor(name: string, time: number) {
    this.startStation = name
    this.startTime = time
  }
}

class UndergroundSystem {
    checkin: Map<number, CheckInEntry>
    journey: Map<String, Array<number>>
        
    constructor() {
        this.checkin = new Map<number, CheckInEntry>()
        this.journey = new Map<String, Array<number>>()
    }

    checkIn(id: number, stationName: string, t: number): void {
        this.checkin.set(id, new CheckInEntry(stationName, t))
    }

    checkOut(id: number, stationName: string, t: number): void {
        const checkInData = this.checkin.get(id)
        
        const key = checkInData.startStation + "-" + stationName
        this.checkin.delete(id)

        if (!this.journey.has(key)) {
            this.journey.set(key, [0, 0])
        }

        let trip = this.journey.get(key)
        trip[0] += t - checkInData.startTime
        trip[1]++
    }

    getAverageTime(startStation: string, endStation: string): number {
        const [totalTime, totalTrips] = this.journey.get(startStation + "-" + endStation)
        return totalTime / totalTrips
    }
}
