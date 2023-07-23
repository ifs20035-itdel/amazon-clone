import { Body, Controller, Post } from '@nestjs/common';

@Controller('product')
export class ProductController {

  @Post()
  createPost(
    @Body('name') name: string,
    @Body('price') price: number ,
    @Body('description') name: string,
  ) {
    await this.ProductService
  }

}
