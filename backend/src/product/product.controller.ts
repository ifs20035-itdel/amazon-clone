import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createPost(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ) {
    const data = { name, price, description };
    return await this.productService.createProduct();
  }
}
