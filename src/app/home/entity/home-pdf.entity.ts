import {attribute, autoGeneratedHashKey, rangeKey, table} from '@aws/dynamodb-data-mapper-annotations';
import {ApiModelProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';
import {ExtendedEntity} from '../../_helpers';

@table(`home_pdf`)
export class HomePdfEntity extends ExtendedEntity {

	@ApiModelProperty()
	@autoGeneratedHashKey()
	public id: string;

	@ApiModelProperty()
	@IsString()
	@rangeKey()
	public homeId: string;

	@ApiModelProperty()
	@IsString()
	@attribute()
	public sha1: string;

	@ApiModelProperty()
	@IsString()
	@attribute()
	public bucket: string;

	@ApiModelProperty()
	@IsString()
	@attribute()
	public key: string;

	public getUrl(): string {
		return `https://${this.bucket}.s3.amazonaws.com/${this.key}`;
	}
}
