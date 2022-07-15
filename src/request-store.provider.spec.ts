import { Test, TestingModule } from '@nestjs/testing';
import { RequestStoreProvider } from './request-store.provider';

describe('RequestStoreProvider', () => {
  let provider: RequestStoreProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestStoreProvider],
    }).compile();

    provider = module.get<RequestStoreProvider>(RequestStoreProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
