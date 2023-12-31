const constants={};

constants.DATA_DIR = '../data';
constants.DATASET_DIR = '../data/dataset';
constants.RAW_DIR = '../data/raw';
constants.JSON_DIR = '../data/dataset/json';
constants.IMG_DIR = '../data/dataset/img';
constants.SAMPLES='../data/dataset/samples.json';

if(typeof module !== 'undefined'){
    module.exports=constants;
}