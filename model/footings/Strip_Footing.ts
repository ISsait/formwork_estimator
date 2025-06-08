export default class StripFooting {
  length: number;
  width: number;
  depth: number;
  concreteVolume: number;
  formworkArea: number;

  constructor(length: number, width: number, depth: number) {
    this.length = length;
    this.width = width;
    this.depth = depth;
    this.concreteVolume = this.calculateConcreteVolume();
    this.formworkArea = this.calculateFormworkArea();
  }

  private calculateConcreteVolume(): number {
    return this.length * this.width * this.depth;
  }

  private calculateFormworkArea(): number {
    return 2 * this.length * this.depth;
  }
}