import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDocument } from './product.schema';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createPost(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description?: string,
  ): Promise<ProductDocument> {
    return await this.productService.createProduct(name, price, description);
  }

  @Get()
  async findAll(): Promise<ProductDocument[]> {
    return await this.productService.findAll();
  }

  @Get(':id')
  async findProduct(@Param('id') id: string): Promise<ProductDocument> {
    return await this.productService.findById(id);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description?: string,
  ): Promise<ProductDocument> {
    const existingProduct = await this.productService.findById(id);
    if (!existingProduct) {
      throw new HttpException(
        'The Product is not correct',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.productService.update(id, name, price, description);
  }

  @Delete(':id')
  async removeProduct(@Param('id') id: string) {
    await this.productService.delete(id);
  }
}
