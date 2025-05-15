package main

import (
	"context"
	"regexp"
	"strings"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) Reverse(str string) string {
	words := strings.Fields(str)
	for i, word := range words {
		runes := []rune(word)
		for j, k := 0, len(runes)-1; j < k; j, k = j+1, k-1 {
			runes[j], runes[k] = runes[k], runes[j]
		}
		words[i] = string(runes)
	}
	return strings.Join(words, " ")
}

func (a *App) Validate(str string) string {
	lowerstr := strings.ToLower(str)
	a_count := strings.Count(lowerstr, "a")
	b_count := strings.Count(lowerstr, "b")

	is_a_even := a_count%2 == 0
	is_b_odd := b_count%2 != 0

	result := "NO"

	if is_a_even && is_b_odd {
		result = "YES"
	}

	return result
}

func (a *App) Repetition(str string) string {
	a_count := strings.Count(str, "a")
	b_count := strings.Count(str, "b")
	c_count := strings.Count(str, "c")
	r, _ := regexp.Compile("^(a*)(b*)(c*)$")

	result := "NO"

	if r.MatchString(str) && (a_count == b_count && b_count == c_count) {
		result = "YES"
	}

	return result
}
