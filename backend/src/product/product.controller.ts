import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDocument } from './product.schema';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @UseGuards(JwtGuard)
  async createPost(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description?: string,
  ): Promise<ProductDocument> {
    return await this.productService.createProduct(name, price, description);
  }

  @Get()
  @UseGuards(JwtGuard)
  async findAll(): Promise<ProductDocument[]> {
    return await this.productService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  async findProduct(@Param('id') id: string): Promise<ProductDocument> {
    return await this.productService.findById(id);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
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
  @UseGuards(JwtGuard)
  async removeProduct(@Param('id') id: string) {
    const existingProduct = await this.productService.findById(id);
    if (!existingProduct) {
      throw new HttpException(
        'The Product id is not correct',
        HttpStatus.BAD_REQUEST,
      );
    }
    // TODO: fix return JSON;
    return await this.productService.delete(id);
  }
}
