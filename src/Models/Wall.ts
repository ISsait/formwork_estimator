export default class Wall {
  height: number;
  length: number;
  thickness: number;
  id: string;

  constructor(height: number, length: number, thickness: number, id: string) {
    this.height = height;
    this.length = length;
    this.thickness = thickness;
    this.id = id;
  }
}
