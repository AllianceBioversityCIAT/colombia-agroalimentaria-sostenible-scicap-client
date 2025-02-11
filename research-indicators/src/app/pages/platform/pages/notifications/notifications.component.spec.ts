import { ComponentFixture, TestBed } from '@angular/core/testing';
import NotificationsComponent from './notifications.component';
import { TabViewModule } from 'primeng/tabview';
import { NotificationItemComponent } from '@shared/components/notification-item/notification-item.component';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;

  beforeEach(async () => {
    // Mock ResizeObserver
    global.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };

    await TestBed.configureTestingModule({
      imports: [NotificationsComponent, TabViewModule, NotificationItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
