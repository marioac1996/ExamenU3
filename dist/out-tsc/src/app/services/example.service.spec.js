import { TestBed } from '@angular/core/testing';
import { ExampleService } from './example.service';
describe('ExampleService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ExampleService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=example.service.spec.js.map