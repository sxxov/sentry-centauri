import tv_bin from './tv.bin?url';
import Image_2_jpg from './Image_2.jpg?url';
import Image_1_jpg from './Image_1.jpg?url';
import Image_0_jpg from './Image_0.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "tv"
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"name": "tv",
			"normalTexture": {
				"index": 0
			},
			"occlusionTexture": {
				"index": 1
			},
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 2
				},
				"metallicRoughnessTexture": {
					"index": 1
				}
			}
		}
	],
	"meshes": [
		{
			"name": "tv",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 1
		},
		{
			"sampler": 0,
			"source": 2
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "Image_2",
			"uri": Image_2_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "Image_1",
			"uri": Image_1_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "Image_0",
			"uri": Image_0_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 31189,
			"max": [
				0.5177032351493835,
				0.3252931833267212,
				0.3952481746673584
			],
			"min": [
				-0.5177032351493835,
				-0.35874518752098083,
				-0.378693163394928
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 31189,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 31189,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 156267,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 139811,
			"byteOffset": 0
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 139812,
			"uri": tv_bin
		}
	]
}