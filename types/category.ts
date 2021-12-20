export default class Category {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public requireApproval: boolean
  ) {}
}
