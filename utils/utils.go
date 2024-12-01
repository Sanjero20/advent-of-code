package utils

import (
	"bufio"
	"fmt"
	"os"
)

func GetFile(filePath string) []string {
	lines := []string{}

	file, err := os.Open(filePath)
	if err != nil {
		fmt.Println("File does not exist")
		return lines
	}
	defer file.Close()

	reader := bufio.NewReader(file)

	slices := []string{}

	for {
		line, err := reader.ReadString('\n')
		if err != nil {
			break
		}

		slices = append(slices, line)
	}

	return slices
}
