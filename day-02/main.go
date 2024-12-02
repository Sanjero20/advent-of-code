package main

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/Sanjero20/advent-of-code/utils"
)

func main() {
	values := utils.GetFile("input.txt")

	// Part 1
	answer_1 := Part1(values)
	fmt.Println("How many reports are safe? -> ", answer_1)

	// answer_2 := Part2(values)
	// fmt.Println("How many reports are now safe? -> ", answer_2)
}

func Part1(values []string) int {
	var safe_levels int

	for i, value := range values {
		numbers := ConvertStringSliceToInT(value)
		isSafe := true

		if numbers[0] < numbers[1] { // Increasing
			var difference int
			for i := 0; i < len(numbers)-1; i++ {
				difference = numbers[i+1] - numbers[i]
				if difference < 1 || difference > 3 {
					isSafe = false
					break
				}
			}

			if isSafe {
				fmt.Println(i, "↑ T", numbers, difference)
			} else {
				fmt.Println(i, "↑ F", numbers, difference)
			}
		} else if numbers[0] > numbers[1] { // Decreasing
			var difference int

			for i := 0; i < len(numbers)-1; i++ {
				difference = numbers[i] - numbers[i+1]
				if difference < 1 || difference > 3 {
					isSafe = false
					break
				}
			}

			if isSafe {
				fmt.Println(i, "↓ T", numbers, difference)
			} else {
				fmt.Println(i, "↓ F", numbers, difference)
			}
		} else {
			isSafe = false
		}

		if isSafe {
			safe_levels += 1
		}
	}

	return safe_levels
}

func Part2(values []string) int {
	return 0
}

func ConvertStringSliceToInT(str string) []int {
	numbers := []int{}

	x := strings.TrimRight(str, "\r\n")
	y := strings.Split(x, " ")

	for _, v := range y {
		num, err := strconv.Atoi(v)

		if err != nil {
			fmt.Println(err)
			panic("Something went wrong!")
		}

		numbers = append(numbers, num)
	}

	return numbers
}
