interface data  {
  name: string;
  role: string;
  info: string;
  image: string;
}

declare module "*.json" {
  const value: data;
  export default value;
}