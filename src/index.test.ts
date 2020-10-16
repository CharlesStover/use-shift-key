import { act, renderHook } from '@testing-library/react-hooks';
import useShiftKey from '.';

describe('useShiftKey', (): void => {
  it('should default to false', (): void => {
    const { result } = renderHook(useShiftKey);
    expect(result.current).toBe(false);
  });

  it('should listen for keyboard events on mount', (): void => {
    const windowAddEventListener: jest.SpyInstance<void> = jest.spyOn(
      window,
      'addEventListener',
    );
    renderHook(useShiftKey);

    expect(windowAddEventListener).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function),
    );
    expect(windowAddEventListener).toHaveBeenCalledWith(
      'keyup',
      expect.any(Function),
    );
  });

  it('should respond to Shift keydown events', (): void => {
    const { result } = renderHook(useShiftKey);

    act((): void => {
      window.dispatchEvent(new KeyboardEvent('keydown', { shiftKey: true }));
    });

    expect(result.current).toBe(true);
  });

  it('should respond to non-Shift keydown events', (): void => {
    const { result } = renderHook(useShiftKey);

    act((): void => {
      window.dispatchEvent(new KeyboardEvent('keydown', { shiftKey: false }));
    });

    expect(result.current).toBe(false);
  });

  it('should respond to Shift keyup events', (): void => {
    const { result } = renderHook(useShiftKey);

    act((): void => {
      window.dispatchEvent(new KeyboardEvent('keyup', { shiftKey: true }));
    });

    expect(result.current).toBe(true);
  });

  it('should respond to non-Shift keyup events', (): void => {
    const { result } = renderHook(useShiftKey);

    act((): void => {
      window.dispatchEvent(new KeyboardEvent('keyup', { shiftKey: false }));
    });

    expect(result.current).toBe(false);
  });

  it('should stop listening for keyboard events on unmount', (): void => {
    const windowRemoveEventListener: jest.SpyInstance<void> = jest.spyOn(
      window,
      'removeEventListener',
    );
    const { unmount } = renderHook(useShiftKey);

    unmount();

    expect(windowRemoveEventListener).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function),
    );
    expect(windowRemoveEventListener).toHaveBeenCalledWith(
      'keyup',
      expect.any(Function),
    );
  });
});
