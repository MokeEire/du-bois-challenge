import { csvParse } from 'd3-dsv';

export async function load({ fetch }) {
  try {
    const response = await fetch('/data/challenge03.csv'); // Fixed filepath
    const csvText = await response.text();
    const data = csvParse(csvText);
    
    return {
      csvData: data // Changed from 'data' to 'csvData' to avoid confusion
    };
  } catch (error) {
    console.error('Error loading CSV:', error);
    return {
      csvData: []
    };
  }
}