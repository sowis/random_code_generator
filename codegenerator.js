class code {
    constructor(root, third, fivths, seventh, comment, info) {
        this.root = root;
        this.third = third;
        this.fivths = fivths;
        this.seventh = seventh;
        this.comment = comment;
        this.info = info;
        this.tension = null;
    }

    add_random_tension () {
        if (this.third - this.root == 4 || this.third - this.root == -8) { // 메이저
            if (this.fivths - this.root == 7 || this.fivths - this.root == -5) { // 5
                if (this.seventh - this.root == 10 || this.seventh - this.root == -2) {
                    let rand = Math.random();
                    if (rand < 0.16) {
                        this.tension = (this.root + 1) % 12;
                    }
                    else if (rand < 0.32) {
                        this.tension = (this.root + 2) % 12;
                    }
                    else if (rand < 0.48) {
                        this.tension = (this.root + 3) % 12;
                    }
                    else if (rand < 0.64) {
                        this.tension = (this.root + 6) % 12;
                    }
                    else if (rand < 0.80) {
                        this.tension = (this.root + 8) % 12;
                    }
                    else {
                        this.tension = (this.root + 9) % 12;
                    }
                }
                else {
                    let rand = Math.random();
                    if (rand < 0.33) {
                        this.tension = (this.root + 2) % 12;
                    }
                    else if (rand  < 0.66) {
                        this.tension = (this.root + 6) % 12;
                    }
                    else {
                        this.tension = (this.root + 9) % 12;
                    }
                }
            }
        }
        else if (this.third - this.root == 3 || this.third - this.root == -9) { // 마이너
            if (this.fivths - this.root == 7 || this.fivths - this.root == -5) {
                if (this.seventh - this.root == 9 || this.seventh - this.root == -3) {
                    let rand = Math.random();
                    if (rand < 0.5) {
                        this.tension = (this.root + 2) % 12;
                    }
                    else {
                        this.tension = (this.root + 5) % 12;
                    }
                }
                else if (this.seventh - this.root == 10 || this.seventh - this.root == -2) {
                    let rand = Math.random();
                    if (rand < 0.33) {
                        this.tension = (this.root + 2) % 12;
                    }
                    else if (rand  < 0.66) {
                        this.tension = (this.root + 5) % 12;
                    }
                    else {
                        this.tension = (this.root + 9) % 12;
                    }
                }
            }
        }
    }

    get_codename(key) {
        let name = '';
        if (key == 0) {
            switch(this.root) {
                case 0:
                    name = 'C'; break;
                case 1:
                    name = 'D♭'; break;
                case 2:
                    name = 'D'; break;
                case 3:
                    name = 'E♭'; break;
                case 4:
                    name = 'E'; break;
                case 5:
                    name = 'F'; break;
                case 6:
                    name = 'F＃'; break;
                case 7:
                    name = 'G'; break;
                case 8:
                    name = 'A♭'; break;
                case 9:
                    name = 'A'; break;
                case 10:
                    name = 'B♭'; break;
                default:
                    name = 'B'; break;
            }
        }
        else if (key == 1 || key == 2 || key == 4 || key == 7 || key == 9 || key == 11) {
            switch(this.root) {
                case 0:
                    name = 'C'; break;
                case 1:
                    name = 'C＃'; break;
                case 2:
                    name = 'D'; break;
                case 3:
                    name = 'D＃'; break;
                case 4:
                    name = 'E'; break;
                case 5:
                    name = 'F'; break;
                case 6:
                    name = 'F＃'; break;
                case 7:
                    name = 'G'; break;
                case 8:
                    name = 'G＃'; break;
                case 9:
                    name = 'A'; break;
                case 10:
                    name = 'A＃'; break;
                default:
                    name = 'B'; break;
            }
        }
        else {
            switch(this.root) {
                case 0:
                    name = 'C'; break;
                case 1:
                    name = 'D♭'; break;
                case 2:
                    name = 'D'; break;
                case 3:
                    name = 'E♭'; break;
                case 4:
                    name = 'E'; break;
                case 5:
                    name = 'F'; break;
                case 6:
                    name = 'G♭'; break;
                case 7:
                    name = 'G'; break;
                case 8:
                    name = 'A♭'; break;
                case 9:
                    name = 'A'; break;
                case 10:
                    name = 'B♭'; break;
                default:
                    name = 'B'; break;
            }
        }

        if (this.third - this.root == 4 || this.third - this.root == -8) { // 메이저
            if (this.seventh == undefined) {

            }
            else if (this.fivths - this.root == 7 || this.fivths - this.root == -5) { // 5
                if (this.seventh - this.root == 9 || this.seventh - this.root == -3) {
                    name += "6";
                }
                else if (this.seventh - this.root == 10 || this.seventh - this.root == -2) {
                    name += "7";
                }
                else {
                    name += "M7";
                }
            }
            else { // aug
                name += "aug";
            }
        }
        else if (this.third - this.root == 3 || this.third - this.root == -9) { // 마이너
            if (this.seventh == undefined) {
                name += 'm';
            }
            else if (this.fivths - this.root == 7 || this.fivths - this.root == -5) {
                if (this.seventh - this.root == 9 || this.seventh - this.root == -3) {
                    name += "m6";
                }
                else if (this.seventh - this.root == 10 || this.seventh - this.root == -2) {
                    name += "m7";
                }
                else { // M7
                    name += "mM7";
                }
            }
            else { // b5
                if (this.seventh - this.root == 10 || this.seventh - this.root == -2) {
                    name += "m7♭5";
                }
                else {
                    name += "dim";
                }
            }
        }
        else { // sus4
            name += "sus4";
        }

        if (this.tension != null) {
            let dif = this.tension - this.root;
            if (dif < 0) {
                dif += 12;
            }

            if (dif == 1) {
                name += "(♭9)";
            }
            else if (dif == 2) {
                name += "(9)";
            }
            else if (dif == 3) {
                name += "(＃9)";
            }
            else if (dif == 5) {
                name += "(11)";
            }
            else if (dif == 6) {
                name += "(＃11)";
            }
            else if (dif == 8) {
                name += "(♭13)";
            }
            else if (dif == 9) {
                name += "(13)";
            }
            else if (dif == 10) {
                name += "(＃13)";
            }
        }

        return name;
    }
}

function is_same(code1, code2) {
    if (code1.root != code2.root) {
        return false;
    }

    if (code1.third != code2.third) {
        return false;
    }

    if (code1.fivths != code2.fivths) {
        return false;
    }

    if (code1.seventh != code2.seventh) {
        return false;
    }

    return true;
}

class codeGeneratorRandom {
    constructor(major, minor, dominant7, augment, sus4, diminish) {
        this.major = major;
        this.minor = minor;
        this.dominant7 = dominant7;
        this.augment = augment;
        this.sus4 = sus4;
        this.diminish = diminish;

        this.create_functions = [];
        if (this.major == true) this.create_functions.push(this.create_major);
        if (this.minor == true) this.create_functions.push(this.create_minor);
        if (this.dominant7 == true) this.create_functions.push(this.create_dominant7);
        if (this.augment == true) this.create_functions.push(this.create_augment);
        if (this.sus4 == true) this.create_functions.push(this.create_sus4);
        if (this.diminish == true) this.create_functions.push(this.create_diminish);
    }

    // public
    next() {
        this.root = this.get_random_root();
        return this.create_functions[Math.floor(Math.random() * this.create_functions.length)](this.root);
    }

    //private
    get_random_root() {
        return Math.floor(Math.random() * 12); // 0 -> C, 11 -> B
    }

    //private
    create_major(root) {
        return new code(root, (root + 4) % 12, (root + 7) % 12);
    }

    //private
    create_minor(root) {
        return new code(root, (root + 3) % 12, (root + 7) % 12);
    }

    //private
    create_dominant7(root) {
        return new code(root, (root + 4) % 12, (root + 7) % 12);
    }

    //private
    create_augment(root) {
        return new code(root, (root + 4) % 12, (root + 8) % 12);
    }

    //private
    create_sus4(root) {
        return new code(root, (root + 5) % 12, (root + 7) % 12);
    }

    //private
    create_diminish(root) {
        return new code(root, (root + 3) % 12, (root + 6) % 12);
    }
}

class codeGeneratorKey {
    constructor(key, tension, secondary_dominant, subsitute, passing_diminish, modal_interchange) {
        this.key = key;
        this.tension = tension;
        this.secondary_dominant = secondary_dominant;
        this.subsitute = subsitute;
        this.passing_diminish = passing_diminish;
        this.modal_interchange = modal_interchange;

        this.buffer = [];
        this.buffer_size = 8;

        this.make_code_pools(key);

        while (this.buffer.length < this.buffer_size) {
            this.generate();
        }
    
        this.next();
    }

    // private
    make_code_pools(key) {
        this.tonic = [];
        this.tonic.push(new code(key, (key + 4) % 12, (key + 7) % 12, (key + 11) % 12, 'T', 'IM7 (tonic)')); // IM7
        this.tonic.push(new code((key + 4) % 12, (key + 7) % 12, (key + 11) % 12, (key + 2) % 12, 'T', 'IIIm7 (tonic)')); // IIIm7
        this.tonic.push(new code((key + 9) % 12, key % 12, (key + 4) % 12, (key + 7) % 12, 'T', 'VIm7 (tonic)')); // VIm7

        this.subdominant = [];
        this.subdominant.push(new code((key + 2) % 12, (key + 5) % 12, (key + 9) % 12, key, 'SD', 'IIm7 (subdominant)')); // IIm7
        this.subdominant.push(new code((key + 5) % 12, (key + 9) % 12, key, (key + 4) % 12, 'SD', 'IVm7 (subdominant)')); // IVM7

        this.dominant = []; // V7
        this.dominant.push(new code((key + 7) % 12, (key + 11) % 12, (key + 2) % 12, (key + 5) % 12, 'D', 'V7 (dominant)')); // V7

        this.subsitute_tonic = [];
        this.subsitute_tonic.push(new code((key + 6) % 12, (key + 9) % 12, key, (key + 4) % 12, 'T', '＃IVm7♭5 (tonic)')); // #IVm7b5

        this.subsitute_dominant = [];
        this.subsitute_dominant.push(new code((key + 11) % 12, (key + 2) % 12, (key + 5) % 12, (key + 9) % 12, 'D', 'VIIm7♭5 (dominant)')); // VIIm7b5
        this.subsitute_dominant.push(new code((key + 1) % 12, (key + 5) % 12, (key + 8) % 12, (key + 11) % 12, 'D', '♭II7 (dominant)')); // bII7

        this.modal_interchange_tonic_minor = [];
        this.modal_interchange_tonic_minor.push(new code(key, (key + 3) % 12, (key + 7) % 12, (key + 9) % 12, 'Tm', 'Im6 (tonic minor)')); // Im6
        this.modal_interchange_tonic_minor.push(new code((key + 3) % 12, (key + 7) % 12, (key + 10) % 12, (key + 2) % 12, 'Tm', '♭IIIM7 (tonic minor)')); // bIIIM7

        this.modal_interchange_subdominant_minor = [];
        this.modal_interchange_subdominant_minor.push(new code((key + 2) % 12, (key + 5) % 12, (key + 8) % 12, key, 'SDm', 'IIm7♭5 (subdominant minor)')); // IIm7b5
        this.modal_interchange_subdominant_minor.push(new code((key + 5) % 12, (key + 8) % 12, key, (key + 2) % 12, 'SDm', 'IVm6 (subdominant minor)')); // IVm6
        this.modal_interchange_subdominant_minor.push(new code((key + 8) % 12, key, (key + 3) % 12, (key + 7) % 12, 'SDm', '♭VIm7 (subdominant minor)')); // bVIm7
        this.modal_interchange_subdominant_minor.push(new code((key + 10) % 12, (key + 2) % 12, (key + 5) % 12, (key + 8) % 12, 'SDm', '♭VII7 (subdominant minor)')); // bVII7
        this.modal_interchange_subdominant_minor.push(new code((key + 1) % 12, (key + 5) % 12, (key + 8) % 12, key, 'SDm', '♭IIM7 (subdominant minor)')); // bIIM7
    }

    // private
    find_diatonic_by_root(root) {
        let codes = [...this.tonic, ...this.subdominant, ...this.dominant];
        let candidates = [];

        if (this.subsitute == true) {
            codes = [...codes, ...this.subsitute_dominant, ...this.subsitute_tonic];
        }

        if (this.modal_interchange == true) {
            codes = [...codes, ...this.modal_interchange_tonic_minor, ...this.modal_interchange_tonic_minor];
        }

        for (let i of codes) {
            if (i.root == root) {
                candidates.push(i);
            }
        }

        if (candidates.length == 0) {
            return null;
        }

        return candidates[Math.floor(Math.random() * candidates.length)];
    }

    // private
    two_five_divide(dominant, minor) { // return code(II)
        let result;
        let root = (dominant.root + 7) % 12;
        if (minor == true) {
            result = new code(root, (root + 3) % 12, (root + 6) % 12, (root + 10) % 12, 's_SDm', 'two-five progression');
        }
        else {
            result = new code(root, (root + 3) % 12, (root + 7) % 12, (root + 10) % 12, 's_SD', 'two-five progression');
        }

        if (this.tension == true && Math.random() < 0.1) {
            result.add_random_tension();
        }

        return result;
    }

    // private
    subsitute_code (code) { // return code
        switch(code.comment) {
        case 'T':
            return this.subsitute_tonic[Math.floor(Math.random() * this.subsitute_tonic.length)];
        case 'D':
            return this.subsitute_dominant[Math.floor(this.subsitute_dominant.length * Math.random())];
        default:
            return code;
        }
    }

    // private
    generate_diatonic(last) { // return code array
        const diatonics = [...this.tonic, ...this.subdominant, ...this.dominant];
        let result;

        if (last == undefined) {
            result = diatonics[Math.floor(Math.random() * diatonics.length)];
            return [result];
        }
        else if (last.comment == 'D') {
            result = this.tonic[Math.floor(Math.random() * this.tonic.length)];
        }
        else {
            result = diatonics[Math.floor(Math.random() * diatonics.length)];
            while (is_same(result, last)) {
                result = diatonics[Math.floor(Math.random() * this.tonic.length)];
            }
        }

        if (this.subsitute == true && Math.random() < 0.1) {
            result = this.subsitute_code(result);
        }
        
        if (this.modal_interchange == true && Math.random() < 0.1) {
            result = this.generate_modal_interchange(last)[0];
        }

        if (this.tension == true && Math.random() < 0.1) {
            result.add_random_tension();
        }

        if (result.comment == 'D') {
            let rand = Math.random();
            if (rand < 0.5) {
                return [this.two_five_divide(result, false), result];
            }
        }

        return [result];
    }

    // private
    generate_secondary_dominant() { // return code array
        let target = this.generate_diatonic();
        let sd_root = (target[0].root + 7) % 12;
        let s_dominant = new code(sd_root, (sd_root + 4) % 12, (sd_root + 7) % 12, (sd_root + 10) % 12, 's_D', 'secondary dominant'); // V7(secondary)

        if (this.subsitute == true && Math.random() < 0.3) {
            s_dominant = new code((sd_root + 6) % 12, (sd_root + 10) % 12, (sd_root + 1) % 12, (sd_root + 4) % 12, 's_D', 'secondary dominant(subsitute tritone)'); // bII7(secondary)
        }

        if (this.tension == true && Math.random() < 0.3) {
            s_dominant.add_random_tension();
        }

        let rand = Math.random();
        if (rand < 0.3) {
            if (target[0].third - target[0].root == 3) {
                return [this.two_five_divide(s_dominant, true), s_dominant, ...target]; // minor 2-5-1
            }
            else {
                return [this.two_five_divide(s_dominant, false), s_dominant, ...target]; // major 2-5-1
            }
        }

        return [s_dominant, ...target]; // 5-1
    }

    // private
    generate_passing_diminish(last) { // return code array
        if (Math.random() < 0.5) { // passing diminish
            let target;
            let dim_root;
            if (Math.random() < 0.5) { // up
                target = this.find_diatonic_by_root((last.root + 2) % 12);
                dim_root = (last.root + 1) % 12;
            }
            else { // down
                target = this.find_diatonic_by_root((last.root + 10) % 12);
                dim_root = (last.root + 11) % 12;
            }

            if (target == null) {
                target = this.generate_diatonic()[0];
                dim_root = (target.root + 11) % 12;
            }
            
            let dim = new code(dim_root, (dim_root + 3) % 12, (dim_root + 6) % 12, (dim_root + 9) % 12, 'p', 'passing diminish');
            return [dim, target];
        }
        
        // approach diminish
        let target = this.generate_diatonic(last);
        if (this.secondary_dominant == true && Math.random() < 0.1) {
            target = this.generate_secondary_dominant();
        }

        if (target == null) {
            target = this.generate_diatonic();
        }

        let dim_root;
        if (Math.random() < 0.5) { // up
            dim_root = (target[0].root + 1) % 12;
        }
        else { // down
            dim_root = (target[0].root + 11) % 12;
        }
        let dim = new code(dim_root, (dim_root + 3) % 12, (dim_root + 6) % 12, (dim_root + 9) % 12, 'p', 'approach diminish');
        return [dim, ...target];
    }

    generate_modal_interchange (last) { // return code array
        switch (last.comment) {
        case 'D':
            return [this.modal_interchange_tonic_minor[Math.floor(Math.random() * this.modal_interchange_tonic_minor.length)]];
        default:
            let all_modal_interchanges = [...this.modal_interchange_tonic_minor, ...this.modal_interchange_subdominant_minor];
            return [all_modal_interchanges[Math.floor(Math.random() * all_modal_interchanges.length)]];
        }
    }

    // private
    generate() {
        if (this.buffer.length == 0) {
            this.buffer.push(...this.generate_diatonic());
            return;
        }

        if (this.secondary_dominant == true && Math.random() < 0.2) {
            this.buffer.push(...this.generate_secondary_dominant());
            return;
        }

        if (this.passing_diminish == true && Math.random() < 0.1) {
            this.buffer.push(...this.generate_passing_diminish(this.buffer[this.buffer.length - 1]));
            return;
        }

        this.buffer.push(...this.generate_diatonic(this.buffer[this.buffer.length - 1]));
    }

    // public
    next() {
        while (this.buffer.length < this.buffer_size) {
            this.generate();
        }
        return this.buffer.shift();
    }
}

class metronom {
    constructor() {
        this.bpm = 100;
        this.time = 4;
        this.length = 4;
        this.DOM_signs = [];
        this.DOM_metronom = document.querySelector('.metronom');
        this.DOM_volume = document.querySelector('.volume_input');
        this.mute = false;
        this.audio = new Audio('metronom.mp3');
        this.handle;
        this.interval = (60 / this.bpm) * 1000;
        

        for (let i = 0; i < this.time; ++i) {
            this.DOM_signs.push(document.querySelector('.met' + i.toString()));
        }
    }

    set_beat(bpm, time, length) {
        this.bpm = bpm;
        this.time = time;
        this.length = length;
        this.interval = (60 / bpm) * 1000;

        let new_beats = [];
        for (let i = 0; i < time; ++i) {
            new_beats.push(document.createElement('div'));
            new_beats[i].classList.add('met' + i.toString());
            new_beats[i].style.animationDelay = ((i) * (this.interval / 1000)).toString() + 's';
            new_beats[i].style.animationDuration = (time * this.interval / 1000).toString() + 's';
        }

        for (let child of this.DOM_signs) {
            this.DOM_metronom.removeChild(child);
        }
        
        for (let child of new_beats) {
            this.DOM_metronom.appendChild(child);
        }

        this.DOM_signs = new_beats;
    }

    mute_toggle() {
        this.mute = !this.mute;
        if (this.mute == true) {
            this.audio.volume = 0;
        }
    }

    tick() {
        this.audio.volume = this.DOM_volume.value / 100;
        if (this.mute == true) {
            this.audio.volume = 0;
        }
        this.audio.play();
    }

    play() {
        const bound = this.tick.bind(this);

        for (let sign of this.DOM_signs) {
            sign.style.animationPlayState = "running";
        }

        this.handle = setInterval(bound, this.interval);
    }

    pause() {
        clearInterval(this.handle);

        for (let sign of this.DOM_signs) {
            sign.style.animationPlayState = "paused";
        }

        this.set_beat(this.bpm, this.time, this.length);
    }
}

class main_page {
    constructor() {
        this.bpm = 100;
        this.time = 4;
        this.DOM_key = document.querySelector('.current_key');
        this.DOM_current_code = document.querySelector('.current_code>.code');
        this.DOM_current_code_info = document.querySelector('.current_code>.info');
        this.DOM_next_code1 = document.querySelector('.nextcode1');
        this.DOM_next_code2 = document.querySelector('.nextcode2');
        this.DOM_next_code3 = document.querySelector('.nextcode3');
        this.codeGenerator = new codeGeneratorRandom(true, false, false, false, false, false);
        this.handle = null;

        this.codes = [];
        for (let i = 0; i < 4; ++i) {
            this.codes.push(this.codeGenerator.next());
        }
        this.set_codes(this.codes);
    }

    // public
    play() {
        const bound = this.tick.bind(this);
        let interval = (60 / this.bpm) * 1000 * this.time;
        this.handle = setInterval(bound, interval);
    }

    // public
    pause() {
        clearInterval(this.handle);
    }

    // public
    set_beat(bpm, time) {
        this.bpm = bpm;
        this.time = time;
    }

    // private
    tick() {
        this.codes.shift();
        this.codes.push(this.codeGenerator.next());
        this.set_codes(this.codes);
    }

    // public
    setting(is_random_code, major, minor, dominant7, augment, sus4, diminish, key, tension, secondary_dominant, subsitute, passing_diminish, modal_interchange) {
        delete this.codeGenerator;
        if (is_random_code == true) {
            this.codeGenerator = new codeGeneratorRandom(major, minor, dominant7, augment, sus4, diminish);
            this.DOM_key.innerHTML = "random code";
        }
        else {
            this.codeGenerator = new codeGeneratorKey(key, tension, secondary_dominant, subsitute, passing_diminish, modal_interchange);
            this.key = key;
            switch (key) {
                case 0: this.DOM_key.innerHTML = 'C Major'; break;
                case 1: this.DOM_key.innerHTML = 'D♭ Major'; break;
                case 2: this.DOM_key.innerHTML = 'D Major'; break;
                case 3: this.DOM_key.innerHTML = 'E♭ Major'; break;
                case 4: this.DOM_key.innerHTML = 'E Major'; break;
                case 5: this.DOM_key.innerHTML = 'F Major'; break;
                case 6: this.DOM_key.innerHTML = 'G♭ Major'; break;
                case 7: this.DOM_key.innerHTML = 'G Major'; break;
                case 8: this.DOM_key.innerHTML = 'A♭ Major'; break;
                case 9: this.DOM_key.innerHTML = 'A Major'; break;
                case 10: this.DOM_key.innerHTML = 'B♭ Major'; break;
                case 11: this.DOM_key.innerHTML = 'B Major'; break;        
            }
        }

        this.codes = [];
        for (let i = 0; i < 4; ++i) {
            this.codes.push(this.codeGenerator.next());
        }
        this.set_codes(this.codes);
    }

    // private
    set_codes(codes) {
        this.DOM_current_code.innerHTML = codes[0].get_codename(this.key);
        if (codes[0].info == undefined) {
            this.DOM_current_code_info.innerHTML = '';
        }
        else {
            this.DOM_current_code_info.innerHTML = codes[0].info;
        }
        this.DOM_next_code1.innerHTML = codes[1].get_codename(this.key);
        this.DOM_next_code2.innerHTML = codes[2].get_codename(this.key);
        this.DOM_next_code3.innerHTML = codes[3].get_codename(this.key);
    }
}

class settings {
    constructor() {
        this.is_open = false;
        this.is_play = false;
        this.metronom = new metronom();
        this.metronom.set_beat(100, 4, 4);
        this.main_page = new main_page();
        this.DOM_setting_page = document.querySelector('aside');
        this.DOM_random_code_button = document.querySelector('.random_code_button');
        this.DOM_key_button = document.querySelector('.key_button');
        this.DOM_code_select = document.querySelector('.code_select');
        this.DOM_key_setting = document.querySelector('.key_setting');
        this.DOM_advanced = document.querySelector('.advanced');
        this.DOM_main_page = document.querySelector('.main_page');
        this.DOM_icon_setting = document.querySelector('.icon_setting');
        this.DOM_icon_exit = document.querySelector('.icon_exit');
        this.DOM_icon_play = document.querySelector('.icon_play');
        this.DOM_icon_pause = document.querySelector('.icon_pause');
        this.DOM_icon_volume_up = document.querySelector('.icon_volume_up');
        this.DOM_icon_volume_down = document.querySelector('.icon_volume_down');
        this.DOM_icon_volume_off = document.querySelector('.icon_volume_off');
        this.DOM_icon_volume_mute = document.querySelector('.icon_volume_mute');
        this.DOM_volume_input = document.querySelector('.volume_input');
        this.DOM_bpm_input = document.querySelector('.bpm_input');
        this.DOM_show_bpm = document.querySelector('.show_bpm');
        this.DOM_beat_four_three_time = document.querySelector('.four_three_time');
        this.DOM_beat_four_four_time = document.querySelector('.four_four_time');

        this.to_random_code_mode();
        this.add_events();
    }

    to_random_code_mode() {
        let code_modes = document.getElementsByName('code_mode_ckeck');
        this.main_page.setting(true, code_modes[0].checked, code_modes[1].checked, code_modes[2].checked, code_modes[3].checked, code_modes[4].checked, code_modes[5].checked, this.selected_key(), document.getElementsByName('tension')[0].checked, document.getElementsByName('secondary_dominant')[0].checked, document.getElementsByName('subsitute')[0].checked, document.getElementsByName('passing_diminish')[0].checked, document.getElementsByName('modal_interchange')[0].checked);
        this.DOM_key_setting.style.display = 'none';
        this.DOM_advanced.style.display = 'none';
        this.DOM_code_select.style.display = 'inline-block';
    }

    to_key_mode() {
        let code_modes = document.getElementsByName('code_mode_ckeck');
        this.main_page.setting(false, code_modes[0].checked, code_modes[1].checked, code_modes[2].checked, code_modes[3].checked, code_modes[4].checked, code_modes[5].checked, this.selected_key(), document.getElementsByName('tension')[0].checked, document.getElementsByName('secondary_dominant')[0].checked, document.getElementsByName('subsitute')[0].checked, document.getElementsByName('passing_diminish')[0].checked, document.getElementsByName('modal_interchange')[0].checked);
        this.DOM_key_setting.style.display = 'inline-block';
        this.DOM_advanced.style.display = 'inline-block';
        this.DOM_code_select.style.display = 'none';
    }

    is_random_code_mode() {
        return document.getElementsByName('mode')[0].checked;
    }

    is_key_mode() {
        return document.getElementsByName('mode')[1].checked;
    }

    random_code_count() {
        let elements = document.getElementsByName('code_mode_ckeck');
        let count = 0;
        for (let element of elements) {
            if (element.checked == true) {
                ++count;
            }
        }
        return count;
    }

    selected_key() {
        let size = document.getElementsByName('key').length;

        for (let i = 0; i < size; ++i) {
            if (document.getElementsByName('key')[i].checked == true) {
                return i;
            }
        }
    }

    open_page() {
        this.DOM_setting_page.style.right = '10%';
        this.DOM_icon_setting.style.display = 'none';
        this.DOM_icon_exit.style.display = 'inline-block';
        this.DOM_main_page.style.filter = 'blur(10px)';
        this.is_open = true;

        this.DOM_icon_play.style.color = '#03CF5D';
        this.pause();
    }

    close_page() {
        if (this.is_random_code_mode()) {
            if (this.random_code_count() == 0) {
                alert('you have to check codes');
                return false;
            }

            this.to_random_code_mode();
        }
        else {
            this.to_key_mode();
        }
       
        this.DOM_setting_page.style.right = '94%';
        this.DOM_icon_setting.style.display = 'inline-block';
        this.DOM_icon_exit.style.display = 'none';
        this.DOM_main_page.style.filter = '';
        this.is_open = false;

        this.DOM_icon_play.style.color = '#03CF5D';
        return true;
    }

    play() {
        this.metronom.audio.play();

        this.DOM_icon_play.style.display = 'none';
        this.DOM_icon_pause.style.display = 'inline-block';
        this.DOM_bpm_input.disabled = true;
        this.DOM_bpm_input.style.cursor = 'default';
        this.DOM_beat_four_three_time.style.cursor = 'default';
        this.DOM_beat_four_four_time.style.cursor = 'default';
        this.is_play = true;
        this.metronom.play();
        this.main_page.play();
    }

    pause() {
        this.DOM_icon_play.style.display = 'inline-block';
        this.DOM_icon_pause.style.display = 'none';
        this.DOM_bpm_input.disabled = false;
        this.DOM_bpm_input.style.cursor = 'pointer';
        this.DOM_beat_four_three_time.style.cursor = 'pointer';
        this.DOM_beat_four_four_time.style.cursor = 'pointer';
        this.is_play = false;
        this.metronom.pause();
        this.main_page.pause();
    }

    add_events() {
        this.DOM_random_code_button.addEventListener('click', ()=>{
            this.to_random_code_mode();
        });

        this.DOM_key_button.addEventListener('click', ()=>{
            this.to_key_mode();
        })

        this.DOM_main_page.addEventListener('click', ()=>{
            if (this.is_open == true) {
                this.close_page();
            }
        });

        this.DOM_icon_setting.addEventListener('click', ()=>{
            this.open_page();
        });

        this.DOM_icon_exit.addEventListener('click', ()=>{
            this.close_page();
        });

        this.DOM_icon_play.addEventListener('click', ()=>{
            if (this.is_open == true) {
                if (this.close_page()) {
                    this.play();
                }
            }
            else {
                this.play();
            }
        });

        this.DOM_icon_pause.addEventListener('click', ()=>{
            this.pause();
        });

        this.DOM_icon_volume_up.addEventListener('click', ()=>{
            this.DOM_icon_volume_up.style.display = 'none';
            this.DOM_icon_volume_mute.style.display = 'block';
            this.DOM_volume_input.disabled = true;
            this.metronom.mute_toggle();
        });

        this.DOM_icon_volume_down.addEventListener('click', ()=>{
            this.DOM_icon_volume_down.style.display = 'none';
            this.DOM_icon_volume_mute.style.display = 'block';
            this.DOM_volume_input.disabled = true;
            this.metronom.mute_toggle();
        });

        this.DOM_icon_volume_off.addEventListener('click', ()=>{
            this.DOM_icon_volume_off.style.display = 'none';
            this.DOM_icon_volume_mute.style.display = 'block';
            this.DOM_volume_input.disabled = true;
            this.metronom.mute_toggle();
        });

        this.DOM_icon_volume_mute.addEventListener('click', ()=>{
            this.DOM_icon_volume_mute.style.display = 'none';
            if (this.DOM_volume_input.value > 50) {
                this.DOM_icon_volume_up.style.display = 'block';
            }
            else if (this.DOM_volume_input.value > 0){
                this.DOM_icon_volume_down.style.display = 'block';
            }
            else {
                this.DOM_icon_volume_off.style.display = 'block';
            }

            this.DOM_volume_input.disabled = false;
            this.metronom.mute_toggle();
        });

        this.DOM_volume_input.addEventListener('input', ()=>{
            if (this.DOM_volume_input.value == 0) {
                this.DOM_icon_volume_up.style.display = 'none';
                this.DOM_icon_volume_down.style.display = 'none';
                this.DOM_icon_volume_off.style.display = 'block';
            }
            else if (this.DOM_volume_input.value > 50) {
                this.DOM_icon_volume_up.style.display = 'block';
                this.DOM_icon_volume_down.style.display = 'none';
                this.DOM_icon_volume_off.style.display = 'none';
            }
            else {
                this.DOM_icon_volume_up.style.display = 'none';
                this.DOM_icon_volume_down.style.display = 'block';
                this.DOM_icon_volume_off.style.display = 'none';
            }
        });

        this.DOM_bpm_input.addEventListener('input', ()=>{
            this.DOM_show_bpm.innerHTML = this.DOM_bpm_input.value;

            if (this.DOM_beat_four_four_time.style.display != 'none') {
                this.metronom.set_beat(this.DOM_bpm_input.value, 4, 4);
                this.main_page.set_beat(this.DOM_bpm_input.value, 4, 4);
            }
            else if (this.DOM_beat_four_three_time.style.display != 'none') {
                this.metronom.set_beat(this.DOM_bpm_input.value, 3, 4);
                this.main_page.set_beat(this.DOM_bpm_input.value, 3, 4);
            }
        });

        this.DOM_beat_four_three_time.addEventListener('click', ()=>{
            if (this.is_play == true) {
                return;
            }

            this.DOM_beat_four_three_time.style.display = 'none';
            this.DOM_beat_four_four_time.style.display = 'block';
            this.metronom.set_beat(this.DOM_bpm_input.value, 4, 4);
            this.main_page.set_beat(this.DOM_bpm_input.value, 4, 4);
        });

        this.DOM_beat_four_four_time.addEventListener('click', ()=>{
            if (this.is_play == true) {
                return;
            }

            this.DOM_beat_four_three_time.style.display = 'block';
            this.DOM_beat_four_four_time.style.display = 'none';
            this.metronom.set_beat(this.DOM_bpm_input.value, 3, 4);
            this.main_page.set_beat(this.DOM_bpm_input.value, 3, 4);
        });
    }
}

let setting = new settings();