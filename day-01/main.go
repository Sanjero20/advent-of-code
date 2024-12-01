package main

import (
	"fmt"
	"slices"
	"strconv"
	"strings"

	"github.com/Sanjero20/advent-of-code/utils"
)

func main() {
	values := utils.GetFile("input.txt")

	l, r := SeparateValues(values)

	slices.Sort(l)
	slices.Sort(r)

	fmt.Println("Answers for Day 1")
	// Part 1
	total := CalculateTotalDistance(l, r)
	fmt.Println("Part 1 ->", total)

	// Part 2
	similarity_score := CalculateSimilarityScore(l, r)
	fmt.Println("Part 2 ->", similarity_score)
}

func SeparateValues(values []string) (l_arr, r_arr []int) {
	l_arr = []int{}
	r_arr = []int{}

	for _, value := range values {
		line := string(value)
		result := strings.Split(line, "  ")

		l_value, err := strconv.Atoi(result[0])
		if err != nil {
			panic("error")
		}

		r := strings.TrimSpace(result[1])
		r_value, err := strconv.Atoi(r)
		if err != nil {
			panic("error")
		}

		l_arr = append(l_arr, l_value)
		r_arr = append(r_arr, r_value)
	}

	return l_arr, r_arr
}

func CalculateTotalDistance(l, r []int) int {
	distances := []int{}
	for i := 0; i < len(l); i++ {
		y := l[i] - r[i]

		if y < 0 {
			y *= -1 // Convert to absolute value if negative
		}

		distances = append(distances, y)
	}

	var total int

	for _, v := range distances {
		total += v
	}

	return total
}

func CalculateSimilarityScore(l, r []int) int {
	hashtable := make(map[int]int)

	// Traverse the left side, check how many values are similar on the right
	for i := 0; i < len(l); i++ {
		for j := 0; j < len(r); j++ {
			if l[i] == r[j] {
				hashtable[l[i]] += 1
			}
		}
	}

	var score int
	// Loop over the list of left list
	// Multiply to the number of duplicates based on the hashtable
	for i := 0; i < len(l); i++ {
		score += l[i] * hashtable[l[i]]
	}

	return score
}
