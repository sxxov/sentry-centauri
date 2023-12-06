import stump_1_bin from './stump-1.bin?url';
import environment_col_jpg from './environment_col.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular",
		"KHR_materials_ior"
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
			"name": "Stump1.001",
			"rotation": [
				0,
				0,
				-0.08971225470304489,
				0.9959677457809448
			],
			"scale": [
				1.1909846067428589,
				1.1909846067428589,
				1.1909844875335693
			],
			"translation": [
				72.55003356933594,
				14.189458847045898,
				-11.361379623413086
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0,
						0,
						0
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Folliages",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Cylinder.033",
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
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "environment_col",
			"uri": environment_col_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 160,
			"max": [
				0.38914990425109863,
				1.0664929151535034,
				0.4381740093231201
			],
			"min": [
				-0.4023940861225128,
				-0.39546188712120056,
				-0.5283448100090027
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 160,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 160,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 252,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 1479,
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
			"byteLength": 1480,
			"uri": stump_1_bin
		}
	]
}