describe("Entities", function() {
    var man;
    var studentJohn;
    var studentTom;
    var professor;

    beforeEach(function() {
        man = new Man("Jack", 25);
        studentJohn = new Student("John", 20);
        studentTom = new Student("Tom", 21);
        professor = new Professor();
    });

    it("duckType and duckTypeModified methods should recognize objects", function() {
        expect(duckType(man)).toBe("Man");
        expect(duckType(studentJohn)).toBe("Student");
        expect(duckType(studentTom)).toBe("Student");
        expect(duckType(professor)).not.toBe("Professor");

        expect(duckTypeModified.call(man)).toBe("Man");
        expect(duckTypeModified.call(studentJohn)).toBe("Student");
        expect(duckTypeModified.call(studentTom)).toBe("Student");
        expect(duckTypeModified.call(professor)).not.toBe("Professor");
    });

    it("Professor should teach only students", function() {
        professor.teach(studentJohn);
        professor.teach(studentTom);

        expect(professor.isTeaches(studentJohn)).toBeTruthy();
        expect(professor.isTeaches(studentTom)).toBeTruthy();

        expect(function() {
            professor.teach(man)
        }).toThrowError("Professor teaches only students");
        expect(function() {
            professor.teach(professor)
        }).toThrowError("Professor teaches only students");

        expect(professor.isTeaches(man)).toBeFalsy();
        expect(professor.isTeaches(professor)).toBeFalsy();
    });

    it("Professor can count students", function() {
        expect(professor.students.length).toEqual(0);

        professor.teach(studentJohn);
        professor.teach(studentTom);

        expect(professor.students.length).toEqual(2);
    });

    it("Checking for the Man properties", function() {
        expect(man.name).toBeDefined();
        expect(man.age).toBeDefined();
        expect(studentJohn.name).toBeDefined();
        expect(studentJohn.age).toBeDefined();
        expect(professor.name).toBeUndefined();
        expect(professor.age).toBeUndefined();
    });
});