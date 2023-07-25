import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  @Post()
  createPost(
    @Body('name') name: string,
    @Body('price') price: number ,
    @Body('description') name: string,
  ) {
    return await this.ProductService.createProduct();
  }
}
