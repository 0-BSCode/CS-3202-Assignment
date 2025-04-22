package main

import (
	"context"
	"fmt"
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

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) Reverse(str string) string {
	runes := []rune(str)

	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}

	return string(runes)
}

func (a *App) CheckString(str string) string {
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
