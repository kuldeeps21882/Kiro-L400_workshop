import { ProfileService } from '../src/profiles/service';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    service = new ProfileService();
  });

  it('should create a profile with valid data', async () => {
    const result = await service.createProfile({
      name: 'Alice',
      email: 'alice@example.com'
    });
    expect(result).toBeDefined();
    expect(result.name).toBe('Alice');
    expect(result.validated).toBe(true);
  });

  it('should reject profile with missing name', async () => {
    await expect(
      service.createProfile({ email: 'no-name@example.com' })
    ).rejects.toThrow('Name is required');
  });

  it('should update an existing profile', async () => {
    const updated = await service.updateProfile('user-1', { name: 'Bob' });
    expect(updated).toBeDefined();
    expect(updated.name).toBe('Bob');
  });
});
