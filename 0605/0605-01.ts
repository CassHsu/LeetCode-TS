function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let i = 0
    const size = flowerbed.length

    while (i < size && n > 0) {
        if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) 
            && (i == size - 1 || flowerbed[i + 1] == 0)) {
            flowerbed[i] = 1
            n--
         }

        i++
    }

    return n == 0
};
