import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createPost(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ) {
    return await this.productService.createProduct(name, price, description);
  }
}
