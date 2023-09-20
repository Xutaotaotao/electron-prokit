import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from "@jest/globals";

import {
  clearAllSchedule,
  clearSchedule,
  hasSchedule,
  isRunningSchedule,
  registerSchedule,
  runSchedule,
  schedules,
  stopSchedule,
} from "../../src/schedule";

describe("schedule", () => {
  beforeEach(() => {
    schedules.clear();
  });

  afterEach(() => {
    const schedulesArray = Array.from(schedules.values());
    schedulesArray.forEach((schedule) => {
      if (schedule.instance) {
        schedule.instance.clear();
      }
    });
  });

  describe("registerSchedule", () => {
    it("should register new schedule", () => {
      const schedule = {
        name: "test",
        fun: jest.fn(),
        interval: 1000,
      };

      registerSchedule(schedule);

      expect(schedules.has("test")).toBe(true);
      expect(schedules.get("test")).toEqual(schedule);
    });

    it("should return existing schedule if name exists", () => {
      const schedule1 = {
        name: "test",
        fun: jest.fn(),
        interval: 1000,
      };

      registerSchedule(schedule1);

      const schedule2 = {
        name: "test",
        fun: jest.fn(),
        interval: 2000,
      };

      expect(registerSchedule(schedule2).name).toBe(schedule1.name);
    });

    it("should update existing schedule if not running", () => {
      const schedule1 = {
        name: "test",
        fun: jest.fn(),
        interval: 1000,
      };
      registerSchedule(schedule1);

      const schedule2 = {
        name: "test",
        fun: jest.fn(),
        interval: 2000,
      };
      registerSchedule(schedule2);

      expect(schedules.get("test")).toBe(schedule2);
    });

    it("should keep existing running schedule", () => {
      const schedule1 = {
        name: "test",
        isRunning: true,
        fun: jest.fn(),
        interval: 1000,
      };
      registerSchedule(schedule1);

      const schedule2 = {
        name: "test",
        fun: jest.fn(),
        interval: 2000,
      };
      expect(registerSchedule(schedule2)).toBe(schedule1);
    });
  });

  describe("runSchedule", () => {
    it("should run the schedule function", () => {
      const mockFn = jest.fn();

      registerSchedule({
        name: "test",
        fun: mockFn,
        interval: 1000,
      });

      runSchedule("test");

      expect(mockFn).toBeCalledTimes(1);
    });

    it("should set running status", () => {
      registerSchedule({
        name: "test",
        fun: jest.fn(),
        interval: 1000,
      });

      runSchedule("test");

      expect(isRunningSchedule("test")).toBe(true);
    });

    it("should warn if schedule not registered", () => {
      const mockWarn = jest.fn();
      jest.spyOn(console, "warn").mockImplementation(mockWarn);

      runSchedule("not_exist");

      expect(mockWarn).toBeCalledWith("not register this schedule");
    });

    it("should clear existing instance if running", () => {
      const mockInstance = {
        clear: jest.fn(),
      };

      registerSchedule({
        name: "test",
        instance: mockInstance,
        isRunning: true,
        fun: () => {},
        interval: 1000,
      });

      runSchedule("test");

      expect(mockInstance.clear).toBeCalledTimes(1);
    });
  });

  describe("stopSchedule", () => {
    it("should stop running schedule", () => {
      const mockFn = jest.fn();

      registerSchedule({
        name: "test",
        fun: mockFn,
        interval: 1000,
      });

      runSchedule("test");
      stopSchedule("test");

      expect(isRunningSchedule("test")).toBe(false);
      expect(mockFn).toBeCalledTimes(1);
    });
  });

  describe("clearSchedule", () => {
    it("should return early if schedule not exists", () => {
      const mockClear = jest.fn();

      jest.mock("../../src/schedule", () => ({
        hasSchedule: () => false,
        getSchedule: () => ({ instance: { clear: mockClear } }),
      }));

      clearSchedule("test");

      expect(mockClear).not.toBeCalled();
    });
    it("should clear schedule", () => {
      registerSchedule({
        name: "test",
        fun: jest.fn(),
        interval: 1000,
      });

      clearSchedule("test");

      expect(hasSchedule("test")).toBe(false);
    });
  });

  describe("clearAllSchedules", () => {
    it("should clear all schedules", () => {
      registerSchedule({
        name: "test1",
        fun: jest.fn(),
        interval: 1000,
      });
      registerSchedule({
        name: "test2",
        fun: jest.fn(),
        interval: 1000,
      });

      clearAllSchedule();

      expect(schedules.size).toBe(0);
    });
  });
});
