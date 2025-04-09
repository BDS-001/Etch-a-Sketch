# Etch-a-Sketch

A browser-based drawing application inspired by the classic Etch-a-Sketch toy. This interactive web app allows users to create pixel art by hovering their mouse over a grid.

## Features

- **Dynamic Grid Creation**: Start with a default 16x16 grid that can be resized up to 100x100 pixels
- **Drawing Functionality**: Hover over cells to draw in black or rainbow mode
- **Clear Canvas**: Reset the grid with a single click
- **Rainbow Mode**: Toggle between standard black drawing and colorful rainbow mode
- **Responsive Design**: Grid maintains its overall dimensions regardless of pixel density

## Live Demo

[View the live demo](#) (Add your deployment link when available)

## How to Use

1. **Draw**: Simply hover your mouse over the grid to start drawing
2. **Change Grid Size**:
   - Click the "Select Pixel Density" button
   - Enter a number between 1-100 to set the number of cells per side
   - The grid will automatically regenerate with the new dimensions

3. **Clear the Grid**:
   - Click the "Clear Grid" button to reset all cells to white

4. **Rainbow Mode**:
   - Click the "Rainbow Mode: OFF" button to toggle rainbow mode
   - When ON, each cell will be filled with a random color instead of black
   - When rainbow mode is active, the button will display "Rainbow Mode: ON" with a yellow border

## Technologies Used

- HTML5
- CSS3 (Flexbox for grid layout)
- Vanilla JavaScript (DOM Manipulation)

## Project Structure

```
.
├── index.html          # Main HTML document
├── styles.css          # CSS styling
├── etch-a-sketch.js    # JavaScript functionality
└── README.md           # Project documentation
```

## Implementation Details

- Grid is dynamically created using JavaScript DOM manipulation
- Uses Flexbox to create the grid layout
- Event listeners for mouse interaction and button functionality
- Input validation to ensure grid size stays within reasonable limits
- Random color generation for rainbow mode

## Future Enhancements

- Add an eraser tool
- Implement a color picker
- Add ability to save drawings
- Add touch support for mobile devices

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/etch-a-sketch.git
   ```

2. Open `index.html` in your web browser

## License

[MIT License](LICENSE) (Add license if applicable)

## Acknowledgments

- The Odin Project for the project inspiration
- Classic Etch-a-Sketch toy for the concept
